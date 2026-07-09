CREATE TYPE "ContentStatus" AS ENUM ('DRAFT', 'PUBLISHED');

CREATE TABLE "ContentPage" (
  "id" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "locale" TEXT NOT NULL DEFAULT 'es',
  "status" "ContentStatus" NOT NULL DEFAULT 'PUBLISHED',
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "eyebrow" TEXT,
  "heroTitle" TEXT NOT NULL,
  "heroBody" TEXT NOT NULL,
  "body" TEXT NOT NULL DEFAULT '',
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "ContentPage_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "BlogPost" (
  "id" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "locale" TEXT NOT NULL DEFAULT 'es',
  "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "excerpt" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "publishedAt" TIMESTAMP(3),
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "ContentPage_slug_locale_key" ON "ContentPage"("slug", "locale");
CREATE INDEX "ContentPage_locale_status_idx" ON "ContentPage"("locale", "status");
CREATE UNIQUE INDEX "BlogPost_slug_locale_key" ON "BlogPost"("slug", "locale");
CREATE INDEX "BlogPost_locale_status_publishedAt_idx" ON "BlogPost"("locale", "status", "publishedAt");
