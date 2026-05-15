import fs from 'fs';
import path from 'path';
import { User, Manual } from './types';

const dataDir = path.join(process.cwd(), 'public', 'system_data');

export async function getUsers(): Promise<User[]> {
  try {
    const filePath = path.join(dataDir, 'Names', 'Names.txt');
    const content = fs.readFileSync(filePath, 'utf-8');
    return content.split('\n').filter(name => name.trim() !== '').map((name, i) => ({
      id: `user-${i}`,
      name: name.trim()
    }));
  } catch (error) {
    return [];
  }
}

export async function getManuals(): Promise<Manual[]> {
  try {
    const dirPath = path.join(dataDir, 'Manuals', 'HTML and Fonts');
    const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.html'));
    
    return files.map(file => {
      // 01_bathroom.html -> 01_bathroom
      const slug = file.replace('.html', '');
      const title = slug.replace(/^\d+_/, '').replace(/_/g, ' ');
      // capitalize title
      const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);
      
      return {
        id: slug,
        slug,
        title: formattedTitle,
        file
      };
    });
  } catch (error) {
    return [];
  }
}

export async function getManualContent(slug: string): Promise<string | null> {
  try {
    const filePath = path.join(dataDir, 'Manuals', 'HTML and Fonts', `${slug}.html`);
    const content = fs.readFileSync(filePath, 'utf-8');
    return content;
  } catch (error) {
    return null;
  }
}
