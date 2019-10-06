import { ReactNode } from 'react';
import { ProjectProps } from '../components/Project';
import { Image } from './Image';

export interface WorkProject {
  cardProps: ProjectProps;
  technologies: string[];
  myRole: ReactNode;
  images: Image[];
  challengesSolutions: ReactNode;
  description: ReactNode;
  company: string;
}
