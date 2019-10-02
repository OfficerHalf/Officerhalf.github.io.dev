import { ReactNode } from 'react';
import { ProjectProps } from '../components/Project';

export interface WorkProject {
  cardProps: ProjectProps;
  technologies: string[];
  myRole: ReactNode;
  images: string[];
  challengesSolutions: ReactNode;
  description: ReactNode;
}
