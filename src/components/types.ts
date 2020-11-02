export interface Image {
  src: string;
  alt: string;
}

export interface SectionText {
  heading?: string;
  text: {
    content: string;
    icon?: string;
  }[];
  button?: Link;
}

export interface Link {
  text: string;
  href: string;
}

export interface Block {
  type: BlockType;
  data?: BlockSectionData | BlockCardsData | BlockContactsData | BlockSchemaData;
}

export enum BlockType {
  SCHEMA = 'Schema',
  CARDS = 'Cards',
  HEAD = 'Head',
  SECTION = 'Section',
  CONTACTS = 'Contacts'
}

export interface Card {
  title: string;
  image: Image;
  text: string;
  button?: Link;
}

export interface Contact {
  name: string;
  title: string;
  email: string;
  phone: number;
  image: Image;
}

export interface BlockContactsData extends BlockData {
  title: string;
  caption?: string;
  contacts: Contact[];
}

export interface BlockSchemaData extends BlockData {
  selected?: string;
}

export interface BlockCardsData extends BlockData {
  title: string;
  caption: string;
  cards: Card[];
}

export interface BlockData {
  background?: string;
  blob?: boolean;
  id?: string;
}

export interface BlockSectionData extends BlockData {
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
