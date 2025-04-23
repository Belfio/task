/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "task",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("MyBucket");
    const vpc = new sst.aws.Vpc("MyVpc", { nat: "ec2" });

    const cluster = new sst.aws.Cluster("MyCluster", { vpc });

    const task = new sst.aws.Task("MyTask", {
      cluster,
      link: [bucket],
      image: {
        context: "image",
        dockerfile: "Dockerfile.py",
      },
      dev: {
        // command: "node index.mjs",
        // command: "python index.py",
        command: "python3 index.py"

      },
    });

    

    const api = new sst.aws.ApiGatewayV2("TaskApi");
    api.route("GET /", {
      vpc,
      link: [task],
      handler: "index.handler",
    });
    // api.route("POST /", taskTrigger);


    return {
      
      task: task.containers,
      api: api.url,
    };
  },
});