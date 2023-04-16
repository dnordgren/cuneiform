# Can I / should I use serverless for (some/most) of the Cuneiform backend?

## Functions I'd Need

### Ingest

Iterate through a wiki and index content into search index.

- Function 001: Get list of content (page, probably) to be indexed. Store to
  database / push to queue as index jobs.
- Function 002: Index job. Query database / consume from queue to index a wiki
  page to search index.

This would be a spiky workflow - serverless would be a good fit here. Workflow
isn't latency-sensitive. Can massively fan out to index quickly (limit Lambda
concurrency to whatever search index can handle). Webserver would be overwhelmed
by this. Indexing a page of content should be lightweight and fast. Lambda
concurrency would be an ideal way to scale/manage "queue consumption". Re-ingest
over some kind of fixed range is 2x Lambda call (queue jobs, process jobs).

Having webserver pods specifically for queue consumption OR do both REST API and
queue consumption would be a pain. Having serverless handle ingest would be
easier to manage.

I'll have to find some way to invoke the Lambdas to ingest as jobs are placed on the queue. Assuming I use a Postgres table as the queue, something like https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/PostgreSQL-Lambda.html could work - this would be ideal as event-driven. The same Lambda that places the job on the queue could invoke a Lambda to handle the job (just using the queue as persistence/retry/poison queue). These would be event-driven. 

Otherwise, I could schedule a Lambda with EventBridge to poll the table and invoke other Lambdas. Probably could set up polling within .NET on the web server, too.

Another Lambda on cron could monitor the jobs queue (Postgres table) for stuck or failed ingest jobs to retry.

### CRUD for nodes on page

- Function 003: Get Cuneiform nodes for page.
- Function 004: Create Cuneiform node.
- Function 005: Update Cuneiform node.
- Function 005: Delete Cuneiform node.

Probably not a great fit for serverless. Somewhat latency-sensitive. Load is
relatively constant/steady per site usage. Doable as serverless certainly,
though.

### Search

Cuneiform will expose some kind of fluid search API. Find related content to the
page you're currently on. Find related content as you make edits to nodes.
Search nodes and pages per explicit user search.

Probably not a great fit for serverless. Potentially hitting a few different
data sources (Elasticsearch, AI index like Kendra) and merging results (memory
constraints?). Steady stream of queries (search-as-you-type). Highly
latency-sensitive. Serverless would be a pretty expensive way to power this
functionality. Could hit concurrency issues within a tenant (concurrent search
Lambdas executing within an AWS account tenant-per-customer or single-tenant
account structure - 10K?).

### Authentication

Authentication with Cuneiform from client apps. Authentication from Cuneiform to customer wiki apps. These would be better fits for web server than serverless, to use full .NET stack.

Save customer wiki auth info in AWS Secrets Manager (?) - avoid in database.

## Conclusion

- Use serverless for content ingest/search indexing
- Use dedicated webservers for node CRUD and search APIs
