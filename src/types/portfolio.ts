import React from "react";

export interface NavItem {
  id: string;
  number: string;
  caption: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon?: React.ReactNode;
}

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  accentColor: string;
  bgColor: string;
  tags: string[];
}

export interface CompetencyCategory {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  skills: string[];
  metrics?: { label: string; value: string }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  badge?: string;
  link?: string;
}
