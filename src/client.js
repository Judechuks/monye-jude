import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID, // Accessing environment variables
  dataset: "production",
  apiVersion: "2024-02-02",
  useCdn: true,
  token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN, // Accessing environment variables
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
