import { Trigger, customEvent } from "@trigger.dev/sdk";

new Trigger({
  // Give your Trigger a stable ID
  id: "hello-world",
  name: "Template: Hello World",
  // Trigger on the custom event named "your.event", see https://docs.trigger.dev/triggers/custom-events
  on: customEvent({
    name: "your.event",
  }),
  // The run functions gets called once per "your.event" event
  async run(event, ctx) {
    await ctx.waitFor("waiting...", { seconds: 10 });

    await ctx.logger.info("Hello world from inside trigger.dev");
  },
}).listen();
