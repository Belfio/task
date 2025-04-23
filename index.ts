import { Resource } from "sst";
import { task } from "sst/aws/task";

export const handler = async ({request}: {request}) => {
  
  console.log(request);
  const ret = await task.run(Resource.MyTask, {
    CRAZY: "yes",
  });
  return {
    statusCode: 200,
    body: JSON.stringify(ret, null, 2),
  };
};