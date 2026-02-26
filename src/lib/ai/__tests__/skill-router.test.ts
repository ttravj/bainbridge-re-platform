import { describe, it, expect } from "vitest";
import { routeIntent } from "../skill-router";

describe("SkillRouter", () => {
  it("routes commission queries to commission-strategy", () => {
    const route = routeIntent("How do I negotiate my commission fee?");
    expect(route.skills).toContain("commission-strategy");
    expect(route.model).toBe("claude-sonnet-4-5");
  });

  it("routes buyer queries to buyer-representation", () => {
    const route = routeIntent("My buyer won't sign the buyer agreement");
    expect(route.skills).toContain("buyer-representation");
  });

  it("routes CMA queries to cma-generator", () => {
    const route = routeIntent("I need to run comps for a listing");
    expect(route.skills).toContain("cma-generator");
  });

  it("routes unknown queries to general fallback", () => {
    const route = routeIntent("hello world");
    expect(route.skills).toContain("commission-strategy");
    expect(route.model).toBe("claude-haiku-4-5-20251001");
  });

  it("uses haiku for client communication queries", () => {
    const route = routeIntent("Can you help me write an update email to client");
    expect(route.model).toBe("claude-haiku-4-5-20251001");
  });
});
