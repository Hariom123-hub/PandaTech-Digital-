import { relations } from 'drizzle-orm';
import { pgTable, serial, text, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(), // Firebase Auth UID
  email: text('email').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const siteData = pgTable('site_data', {
  id: serial('id').primaryKey(),
  key: text('key').notNull().unique(),
  content: jsonb('content').notNull(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const demoRequests = pgTable('demo_requests', {
  id: serial('id').primaryKey(),
  businessName: text('business_name').notNull(),
  ownerName: text('owner_name').notNull(),
  businessCategory: text('business_category').notNull(),
  businessAddress: text('business_address').notNull(),
  mobileNumber: text('mobile_number').notNull(),
  whatsAppNumber: text('whatsapp_number').notNull(),
  email: text('email'),
  website: text('website'),
  description: text('description'),
  status: text('status').default('pending'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const contactEnquiries = pgTable('contact_enquiries', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  phoneNumber: text('phone_number').notNull(),
  email: text('email').notNull(),
  projectInterest: text('project_interest').notNull(),
  message: text('message').notNull(),
  status: text('status').default('pending'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  // Define relations if needed
}));
