export interface Image {
  src: string;
  alt: string;
}

export interface SectionText {
  heading: string;
  text: {
    content: string;
    icon?: string;
  }[];
  button?: {
    text: string;
    href: string;
  };
}
export interface Block {
  type: BlockType;
  data: BlockSectionData;
}

export enum BlockType {
  SCHEMA = 'SCHEMA',
  CARDS = 'CARDS',
  SECTION = 'SECTION'
}

export interface BlockSectionData {
  left?: {
    type: BlockSection;
    data: SectionText | Image;
  };
  right?: {
    type: BlockSection;
    data: SectionText | Image;
  };
}

export enum BlockSection {
  IMAGE = 'IMAGE',
  TEXT = 'TEXT'
}
