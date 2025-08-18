
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'University of Toronto',
      major: 'BSc Computer Science',
      logo: 'college',
      start: '2024',
      end: 'Present'
    },
    {
      school: 'University of Michigan',
      major: 'Blockchain and Cryptocurrency Explained',
      logo: 'college',
      start: 'Aug 2025',
      end: 'Aug 2025'
    }
  ]