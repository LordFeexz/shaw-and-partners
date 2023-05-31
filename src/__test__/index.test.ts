import request from "supertest";
import app from "..";
// Some tests are made to cover if a limit api call occurs, which will fail if other tests are successful

describe("get User Data", () => {
  test("success with parameter since & limit", async () => {
    const result = await request(app)
      .get(`/api/users`)
      .query({ since: 100, limit: 8 });
    expect(result.status).toBe(200);
    expect(result.body.length).toBe(8);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("login", expect.any(String));
    expect(result.body[0]).toHaveProperty("id", 100);
    expect(result.body[0]).toHaveProperty("node_id", expect.any(String));
    expect(result.body[0]).toHaveProperty("avatar_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("gravatar_id", expect.any(String));
    expect(result.body[0]).toHaveProperty("url", expect.any(String));
    expect(result.body[0]).toHaveProperty("html_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("followers_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("following_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("gists_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("starred_url", expect.any(String));
    expect(result.body[0]).toHaveProperty(
      "subscriptions_url",
      expect.any(String)
    );
    expect(result.body[0]).toHaveProperty(
      "organizations_url",
      expect.any(String)
    );
    expect(result.body[0]).toHaveProperty("repos_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("events_url", expect.any(String));
    expect(result.body[0]).toHaveProperty(
      "received_events_url",
      expect.any(String)
    );
    expect(result.body[0]).toHaveProperty("type", expect.any(String));
    expect(result.body[0]).toHaveProperty("site_admin", expect.any(Boolean));
  });
});

describe("get User Data", () => {
  test("success with parameter since", async () => {
    const result = await request(app).get(`/api/users`).query({ since: 100 });
    expect(result.status).toBe(200);
    expect(result.body.length).toBe(10);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("login", expect.any(String));
    expect(result.body[0]).toHaveProperty("id", 100);
    expect(result.body[0]).toHaveProperty("node_id", expect.any(String));
    expect(result.body[0]).toHaveProperty("avatar_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("gravatar_id", expect.any(String));
    expect(result.body[0]).toHaveProperty("url", expect.any(String));
    expect(result.body[0]).toHaveProperty("html_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("followers_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("following_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("gists_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("starred_url", expect.any(String));
    expect(result.body[0]).toHaveProperty(
      "subscriptions_url",
      expect.any(String)
    );
    expect(result.body[0]).toHaveProperty(
      "organizations_url",
      expect.any(String)
    );
    expect(result.body[0]).toHaveProperty("repos_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("events_url", expect.any(String));
    expect(result.body[0]).toHaveProperty(
      "received_events_url",
      expect.any(String)
    );
    expect(result.body[0]).toHaveProperty("type", expect.any(String));
    expect(result.body[0]).toHaveProperty("site_admin", expect.any(Boolean));
  });
});

describe("get User Data", () => {
  test("success with parameter limit", async () => {
    const result = await request(app).get(`/api/users`).query({ limit: 10 });
    expect(result.status).toBe(200);
    expect(result.body.length).toBe(10);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("login", expect.any(String));
    expect(result.body[0]).toHaveProperty("id", 1);
    expect(result.body[0]).toHaveProperty("node_id", expect.any(String));
    expect(result.body[0]).toHaveProperty("avatar_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("gravatar_id", expect.any(String));
    expect(result.body[0]).toHaveProperty("url", expect.any(String));
    expect(result.body[0]).toHaveProperty("html_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("followers_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("following_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("gists_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("starred_url", expect.any(String));
    expect(result.body[0]).toHaveProperty(
      "subscriptions_url",
      expect.any(String)
    );
    expect(result.body[0]).toHaveProperty(
      "organizations_url",
      expect.any(String)
    );
    expect(result.body[0]).toHaveProperty("repos_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("events_url", expect.any(String));
    expect(result.body[0]).toHaveProperty(
      "received_events_url",
      expect.any(String)
    );
    expect(result.body[0]).toHaveProperty("type", expect.any(String));
    expect(result.body[0]).toHaveProperty("site_admin", expect.any(Boolean));
  });
});

describe("get User Data", () => {
  test("success without parameter", async () => {
    const result = await request(app).get(`/api/users`);
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("login", expect.any(String));
    expect(result.body[0]).toHaveProperty("id", expect.any(Number));
    expect(result.body[0]).toHaveProperty("node_id", expect.any(String));
    expect(result.body[0]).toHaveProperty("avatar_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("gravatar_id", expect.any(String));
    expect(result.body[0]).toHaveProperty("url", expect.any(String));
    expect(result.body[0]).toHaveProperty("html_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("followers_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("following_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("gists_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("starred_url", expect.any(String));
    expect(result.body[0]).toHaveProperty(
      "subscriptions_url",
      expect.any(String)
    );
    expect(result.body[0]).toHaveProperty(
      "organizations_url",
      expect.any(String)
    );
    expect(result.body[0]).toHaveProperty("repos_url", expect.any(String));
    expect(result.body[0]).toHaveProperty("events_url", expect.any(String));
    expect(result.body[0]).toHaveProperty(
      "received_events_url",
      expect.any(String)
    );
    expect(result.body[0]).toHaveProperty("type", expect.any(String));
    expect(result.body[0]).toHaveProperty("site_admin", expect.any(Boolean));
  });
});

describe("get User Data", () => {
  test("failed with parameter since", async () => {
    const result = await request(app)
      .get(`/api/users`)
      .query({ since: 10000000000000 });
    expect(result.status).toBe(404);
    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Data not found");
  });
});

describe("get User Data", () => {
  test("limit api call", async () => {
    const result = await request(app).get(`/api/users`);
    expect(result.status).toBe(403);
    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Limit");
  });
});

describe("get User Detail", () => {
  test("success test", async () => {
    const result = await request(app).get("/api/users/LordFeexz/detail");
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("login", "LordFeexz");
    expect(result.body).toHaveProperty("id", expect.any(Number));
    expect(result.body).toHaveProperty("node_id", expect.any(String));
    expect(result.body).toHaveProperty("avatar_url", expect.any(String));
    expect(result.body).toHaveProperty("gravatar_id", expect.any(String));
    expect(result.body).toHaveProperty("url", expect.any(String));
    expect(result.body).toHaveProperty("html_url", expect.any(String));
    expect(result.body).toHaveProperty("followers_url", expect.any(String));
    expect(result.body).toHaveProperty("following_url", expect.any(String));
    expect(result.body).toHaveProperty("gists_url", expect.any(String));
    expect(result.body).toHaveProperty("starred_url", expect.any(String));
    expect(result.body).toHaveProperty("subscriptions_url", expect.any(String));
    expect(result.body).toHaveProperty("organizations_url", expect.any(String));
    expect(result.body).toHaveProperty("repos_url", expect.any(String));
    expect(result.body).toHaveProperty("events_url", expect.any(String));
    expect(result.body).toHaveProperty(
      "received_events_url",
      expect.any(String)
    );
    expect(result.body).toHaveProperty("type", expect.any(String));
    expect(result.body).toHaveProperty("site_admin", expect.any(Boolean));
    expect(result.body).toHaveProperty("name", expect.any(String));
    expect(result.body).toHaveProperty("company", null);
    expect(result.body).toHaveProperty("blog", expect.any(String));
    expect(result.body).toHaveProperty("location", expect.any(String));
    expect(result.body).toHaveProperty("email", null);
    expect(result.body).toHaveProperty("hireable", null);
    expect(result.body).toHaveProperty("bio", expect.any(String));
    expect(result.body).toHaveProperty("twitter_username", null);
    expect(result.body).toHaveProperty("public_repos", expect.any(Number));
    expect(result.body).toHaveProperty("public_gists", expect.any(Number));
  });
});

describe("get User Detail", () => {
  test("failed test not found", async () => {
    const result = await request(app).get("/api/users/LordFeexzz/detail");
    expect(result.status).toBe(404);
    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Data not found");
  });
});

describe("get User Detail", () => {
  test("failed test limit", async () => {
    const result = await request(app).get("/api/users/LordFeexz/detail");
    expect(result.status).toBe(403);
    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Limit");
  });
});

describe("get User Repo", () => {
  test("success get user repo", async () => {
    const result = await request(app).get("/api/users/LordFeexz/repos");
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body[0]).toBeInstanceOf(Object);
    expect(result.body[0]).toHaveProperty("id", expect.any(Number));
    expect(result.body[0]).toHaveProperty("node_id", expect.any(String));
    expect(result.body[0]).toHaveProperty("name", expect.any(String));
    expect(result.body[0]).toHaveProperty("full_name", expect.any(String));
    expect(result.body[0]).toHaveProperty("private", expect.any(Boolean));
    expect(result.body[0].owner).toBeInstanceOf(Object);
    expect(result.body[0].owner).toHaveProperty("login", "LordFeexz");
    expect(result.body[0].owner).toHaveProperty("id", expect.any(Number));
    expect(result.body[0].owner).toHaveProperty("node_id", expect.any(String));
    expect(result.body[0].owner).toHaveProperty(
      "avatar_url",
      expect.any(String)
    );
    expect(result.body[0].owner).toHaveProperty(
      "gravatar_id",
      expect.any(String)
    );
    expect(result.body[0].owner).toHaveProperty("url", expect.any(String));
    expect(result.body[0].owner).toHaveProperty("html_url", expect.any(String));
    expect(result.body[0].owner).toHaveProperty(
      "followers_url",
      expect.any(String)
    );
    expect(result.body[0].owner).toHaveProperty(
      "following_url",
      expect.any(String)
    );
    expect(result.body[0].owner).toHaveProperty(
      "gists_url",
      expect.any(String)
    );
    expect(result.body[0].owner).toHaveProperty(
      "starred_url",
      expect.any(String)
    );
    expect(result.body[0].owner).toHaveProperty(
      "subscriptions_url",
      expect.any(String)
    );
    expect(result.body[0].owner).toHaveProperty(
      "organizations_url",
      expect.any(String)
    );
    expect(result.body[0].owner).toHaveProperty(
      "repos_url",
      expect.any(String)
    );
    expect(result.body[0].owner).toHaveProperty(
      "events_url",
      expect.any(String)
    );
    expect(result.body[0].owner).toHaveProperty(
      "received_events_url",
      expect.any(String)
    );
    expect(result.body[0].owner).toHaveProperty("type", expect.any(String));
    expect(result.body[0].owner).toHaveProperty(
      "site_admin",
      expect.any(Boolean)
    );
  });
});

describe("get User Repo", () => {
  test("limit api call", async () => {
    const result = await request(app).get("/api/users/LordFeexzz/repos");
    expect(result.status).toBe(404);
    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Data not found");
  });
});

describe("get User Repo", () => {
  test("limit api call", async () => {
    const result = await request(app).get("/api/users/LordFeexz/repos");
    expect(result.status).toBe(403);
    expect(result.body).toBeInstanceOf(Object);
    expect(result.body).toHaveProperty("message", "Limit");
  });
});
