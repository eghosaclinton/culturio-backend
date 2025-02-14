CREATE TABLE "exhibits" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar(500) NOT NULL,
	"media_url" varchar(255) NOT NULL,
	"visitor_count" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "visitors" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"exhibit_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "visitors" ADD CONSTRAINT "visitors_exhibit_id_exhibits_id_fk" FOREIGN KEY ("exhibit_id") REFERENCES "public"."exhibits"("id") ON DELETE no action ON UPDATE no action;