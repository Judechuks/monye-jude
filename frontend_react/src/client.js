import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  // projectId: "2a0s3s0w",
  dataset: "production",
  apiVersion: "2024-02-02",
  useCdn: true,
  // token:
  //   "skRfgxa6CPZnFYRu9QGkilN26gAdWjgfUbuHq3PE1u3wQoUH4f1up2cJaPFl1fkNISiA4TGXbtvOIPld8aQqoqWxDYdwb223pb0v00BPte01uEySDnCujKeqgPqs6iK431Bj2scpnhsGAjUPn7U0I4Qwe4zn0V4pZaKtn8vAPab0FayvtLRi",
  token: process.env.REACT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
