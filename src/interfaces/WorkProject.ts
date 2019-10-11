import { ReactNode } from 'react';
import { ProjectProps } from '../components/Project';
import { Image } from './Image';

interface WorkProjectFeature {
  name: string;
  description: ReactNode;
}

export interface WorkProject {
  cardProps: ProjectProps;
  technologies: string[];
  myRole: ReactNode;
  images: Image[];
  challengesSolutions: ReactNode;
  description: ReactNode;
  company: string;
  features: WorkProjectFeature[];
}
