// Vendors
import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  workspaces: defineTable({
    joinCode: v.string(),
    name: v.string(),
    userId: v.id("users"),
  }),
});

export default schema;
