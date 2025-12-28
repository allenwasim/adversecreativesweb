
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "src/content/pages/{slug}.md",
          fields: [
            {
              name: "navbar",
              type: "object",
              fields: [
                { name: "brand", type: "string", required: true },
                { name: "subBrand", type: "string", required: true },
                {
                  name: "contactButton",
                  type: "object",
                  fields: [
                    { name: "text", type: "string", required: true },
                    { name: "link", type: "string", required: true },
                  ],
                },
              ],
            },
            {
              name: "hero",
              type: "object",
              fields: [
                { name: "title", type: "string", required: true },
                { name: "highlight", type: "string", required: true },
                { name: "description", type: "string", required: true },
                {
                  name: "buttons",
                  type: "list",
                  items: {
                    type: "object",
                    fields: [
                      { name: "text", type: "string", required: true },
                      { name: "link", type: "string", required: true },
                      {
                        name: "variant",
                        type: "enum",
                        options: ["primary", "secondary"],
                        required: true,
                      },
                    ],
                  },
                },
                {
                  name: "floatingIcons",
                  type: "list",
                  items: {
                    type: "object",
                    fields: [
                      { name: "icon", type: "string", required: true },
                      { name: "color", type: "string", required: true },
                      { name: "position", type: "string", required: true },
                    ],
                  },
                },
              ],
            },
            {
              name: "stats",
              type: "object",
              fields: [
                { name: "label", type: "string", required: true },
                { name: "title", type: "string", required: true },
                { name: "highlight", type: "string", required: true },
                { name: "description", type: "string", required: true },
                {
                  name: "items",
                  type: "list",
                  items: {
                    type: "object",
                    fields: [
                      { name: "title", type: "string", required: true },
                      { name: "desc", type: "string", required: true },
                      { name: "icon", type: "string", required: true },
                    ],
                  },
                },
              ],
            },
            {
              name: "showcase",
              type: "object",
              fields: [
                { name: "label", type: "string", required: true },
                { name: "title", type: "string", required: true },
                { name: "highlight", type: "string", required: true },
                { name: "description", type: "string", required: true },
                { name: "mainImage", type: "string", required: true }, // Should be image type, but keeping string as per schema z.string for now implies path string
                { name: "videoUrl", type: "string" },
                { name: "rightImage", type: "string" },
                {
                  name: "features",
                  type: "list",
                  items: {
                    type: "object",
                    fields: [
                      { name: "text", type: "string", required: true },
                      { name: "icon", type: "string" },
                    ],
                  },
                },
              ],
            },
            {
              name: "brands",
              type: "object",
              fields: [
                { name: "title", type: "string", required: true },
                { name: "highlight", type: "string", required: true },
                {
                  name: "list",
                  type: "list",
                  items: {
                    type: "object",
                    fields: [
                      { name: "name", type: "string", required: true },
                      { name: "logo", type: "string", required: true },
                      { name: "link", type: "string" },
                    ],
                  },
                },
              ],
            },
            {
              name: "howItWorks",
              type: "object",
              fields: [
                { name: "label", type: "string", required: true },
                { name: "title", type: "string", required: true },
                { name: "image", type: "string", required: true },
                {
                  name: "steps",
                  type: "list",
                  items: {
                    type: "object",
                    fields: [
                      { name: "title", type: "string", required: true },
                      { name: "desc", type: "string", required: true },
                    ],
                  },
                },
              ],
            },
            {
              name: "features",
              type: "object",
              fields: [
                { name: "label", type: "string", required: true },
                { name: "title", type: "string", required: true },
                { name: "highlight", type: "string", required: true },
                { name: "description", type: "string", required: true },
                {
                  name: "items",
                  type: "list",
                  items: {
                    type: "object",
                    fields: [
                      { name: "title", type: "string", required: true },
                      { name: "img", type: "string", required: true },
                      { name: "icon", type: "string", required: true },
                    ],
                  },
                },
              ],
            },
            {
              name: "footer",
              type: "object",
              fields: [
                { name: "title", type: "string", required: true },
                { name: "subtitle", type: "string", required: true },
                { name: "companyName", type: "string", required: true },
                { name: "companyDesc", type: "string", required: true },
                {
                  name: "contact",
                  type: "object",
                  fields: [
                    { name: "phone", type: "string", required: true },
                    { name: "email", type: "string", required: true },
                  ],
                },
                {
                  name: "ctaButtons",
                  type: "list",
                  items: {
                    type: "object",
                    fields: [
                      { name: "text", type: "string", required: true },
                      { name: "link", type: "string", required: true },
                      {
                        name: "variant",
                        type: "enum",
                        options: ["primary", "secondary"],
                        required: true,
                      },
                    ],
                  },
                },
                {
                  name: "socials",
                  type: "object",
                  fields: [
                    { name: "linkedin", type: "string", required: true },
                    { name: "facebook", type: "string", required: true },
                  ],
                },
                { name: "mapEmbedUrl", type: "string" },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
