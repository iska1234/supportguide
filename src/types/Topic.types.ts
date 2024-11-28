export interface Topic {
    id: number;
    title: string;
    description: string;
    iscompleted: boolean;
    created_at: string;
    updated_at: string;
  }
  
  export interface CreateTopic {
    title: string;
    description: string;
    isCompleted: boolean;
  }
  
  export interface UpdateTopic {
    id: number
    title?: string;
    description?: string;
    isCompleted?: boolean;
  }
  