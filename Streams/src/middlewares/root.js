export const myexpress = {
  async json(request, response) {
    const buffer = [];

    for await (const chunk of request) {
      buffer.push(chunk);
    }

    try {
      const body = JSON.parse(Buffer.concat(buffer).toString());
      request.body = body;
    } catch {
      request.body = null;
    }

    response.setHeader("Content-type", "application/json")
  },
};
