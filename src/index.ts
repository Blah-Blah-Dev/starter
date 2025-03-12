import blahBlah from "blah-blah";

// Set up your OAuth2 client with credentials from environment variables
const BLAHBLAH_PROJECT_ID = process.env.BLAHBLAH_PROJECT_ID!;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN!;

blahBlah({
  projectId: BLAHBLAH_PROJECT_ID,
  openAiApiKey: OPENAI_API_KEY,
  googleClientId: GOOGLE_CLIENT_ID,
  googleClientSecret: GOOGLE_CLIENT_SECRET,
  googleRefreshToken: GOOGLE_REFRESH_TOKEN,
  searchTerms: ["reactjs", "react-native", "react native"],
  resultsPerJob: 10,
});
