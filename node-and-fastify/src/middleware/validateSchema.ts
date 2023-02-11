import { FastifyReply, FastifyRequest } from "fastify";
import { AnyZodObject } from "zod";

export function validate(schema: AnyZodObject) {
  return (request: FastifyRequest, response: FastifyReply) => {
    try {
      schema.parse({
        body: request.body,
        query: request.query,
        params: request.params,
      });
      
    } catch (error) {
      return response.send({ error })
    }
  };
}
