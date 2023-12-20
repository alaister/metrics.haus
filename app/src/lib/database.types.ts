export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      commentable_entities: {
        Row: {
          id: string
          team_id: string
          type: Database['public']['Enums']['commentable_entity_type']
        }
        Insert: {
          id?: string
          team_id: string
          type: Database['public']['Enums']['commentable_entity_type']
        }
        Update: {
          id?: string
          team_id?: string
          type?: Database['public']['Enums']['commentable_entity_type']
        }
        Relationships: [
          {
            foreignKeyName: 'commentable_entities_team_id_fkey'
            columns: ['team_id']
            isOneToOne: false
            referencedRelation: 'teams'
            referencedColumns: ['id']
          },
        ]
      }
      comments: {
        Row: {
          body: string
          created_at: string | null
          id: string
          profile_id: string
          reply_to_comment_id: string | null
          team_id: string
          thread_id: string
          updated_at: string | null
        }
        Insert: {
          body: string
          created_at?: string | null
          id?: string
          profile_id?: string
          reply_to_comment_id?: string | null
          team_id: string
          thread_id: string
          updated_at?: string | null
        }
        Update: {
          body?: string
          created_at?: string | null
          id?: string
          profile_id?: string
          reply_to_comment_id?: string | null
          team_id?: string
          thread_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'comments_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'comments_reply_to_comment_id_fkey'
            columns: ['reply_to_comment_id']
            isOneToOne: false
            referencedRelation: 'comments'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'comments_team_id_fkey'
            columns: ['team_id']
            isOneToOne: false
            referencedRelation: 'teams'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'comments_thread_id_fkey'
            columns: ['thread_id']
            isOneToOne: false
            referencedRelation: 'threads'
            referencedColumns: ['id']
          },
        ]
      }
      metrics: {
        Row: {
          archived: boolean | null
          commentable_entity_id: string | null
          created_at: string
          description: string | null
          icon: string | null
          id: string
          interval: Database['public']['Enums']['metric_interval']
          name: string
          team_id: string
          unit_short: string | null
          updated_at: string
        }
        Insert: {
          archived?: boolean | null
          commentable_entity_id?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          interval: Database['public']['Enums']['metric_interval']
          name: string
          team_id: string
          unit_short?: string | null
          updated_at?: string
        }
        Update: {
          archived?: boolean | null
          commentable_entity_id?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          interval?: Database['public']['Enums']['metric_interval']
          name?: string
          team_id?: string
          unit_short?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'metrics_commentable_entity_id_fkey'
            columns: ['commentable_entity_id']
            isOneToOne: false
            referencedRelation: 'commentable_entities'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'metrics_team_id_fkey'
            columns: ['team_id']
            isOneToOne: false
            referencedRelation: 'teams'
            referencedColumns: ['id']
          },
        ]
      }
      metrics_data_points: {
        Row: {
          commentable_entity_id: string | null
          metric_id: string
          reported_by: string
          time: string
          value: number
        }
        Insert: {
          commentable_entity_id?: string | null
          metric_id: string
          reported_by?: string
          time: string
          value: number
        }
        Update: {
          commentable_entity_id?: string | null
          metric_id?: string
          reported_by?: string
          time?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: 'metrics_data_points_commentable_entity_id_fkey'
            columns: ['commentable_entity_id']
            isOneToOne: false
            referencedRelation: 'commentable_entities'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'metrics_data_points_metric_id_fkey'
            columns: ['metric_id']
            isOneToOne: false
            referencedRelation: 'metrics'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'metrics_data_points_reported_by_fkey'
            columns: ['reported_by']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      metrics_owners: {
        Row: {
          created_at: string
          metric_id: string
          profile_id: string
        }
        Insert: {
          created_at?: string
          metric_id: string
          profile_id: string
        }
        Update: {
          created_at?: string
          metric_id?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'metrics_owners_metric_id_fkey'
            columns: ['metric_id']
            isOneToOne: false
            referencedRelation: 'metrics'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'metrics_owners_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      notifications: {
        Row: {
          body: string | null
          created_at: string | null
          id: string
          metadata: Json | null
          profile_id: string
          seen_at: string | null
          team_id: string
        }
        Insert: {
          body?: string | null
          created_at?: string | null
          id?: string
          metadata?: Json | null
          profile_id: string
          seen_at?: string | null
          team_id: string
        }
        Update: {
          body?: string | null
          created_at?: string | null
          id?: string
          metadata?: Json | null
          profile_id?: string
          seen_at?: string | null
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'notifications_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'notifications_team_id_fkey'
            columns: ['team_id']
            isOneToOne: false
            referencedRelation: 'teams'
            referencedColumns: ['id']
          },
        ]
      }
      profiles: {
        Row: {
          avatar_path: string | null
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          avatar_path?: string | null
          created_at?: string
          id: string
          name: string
          updated_at?: string
        }
        Update: {
          avatar_path?: string | null
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      team_members: {
        Row: {
          created_at: string
          profile_id: string
          team_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          profile_id: string
          team_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          profile_id?: string
          team_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'team_members_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'team_members_team_id_fkey'
            columns: ['team_id']
            isOneToOne: false
            referencedRelation: 'teams'
            referencedColumns: ['id']
          },
        ]
      }
      teams: {
        Row: {
          created_at: string
          id: string
          name: string
          sso_provider_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          sso_provider_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          sso_provider_id?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      threads: {
        Row: {
          commentable_entity_id: string
          created_at: string | null
          id: string
          profile_id: string
          team_id: string
          title: string
          updated_at: string | null
        }
        Insert: {
          commentable_entity_id: string
          created_at?: string | null
          id?: string
          profile_id?: string
          team_id: string
          title: string
          updated_at?: string | null
        }
        Update: {
          commentable_entity_id?: string
          created_at?: string | null
          id?: string
          profile_id?: string
          team_id?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'threads_commentable_entity_id_fkey'
            columns: ['commentable_entity_id']
            isOneToOne: false
            referencedRelation: 'commentable_entities'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'threads_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'threads_team_id_fkey'
            columns: ['team_id']
            isOneToOne: false
            referencedRelation: 'teams'
            referencedColumns: ['id']
          },
        ]
      }
      user_events: {
        Row: {
          event: Database['public']['Enums']['user_event']
          id: string
          meta: Json | null
          ts: string
          user_id: string
          value: string | null
        }
        Insert: {
          event: Database['public']['Enums']['user_event']
          id?: string
          meta?: Json | null
          ts?: string
          user_id?: string
          value?: string | null
        }
        Update: {
          event?: Database['public']['Enums']['user_event']
          id?: string
          meta?: Json | null
          ts?: string
          user_id?: string
          value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profile_events_profile_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      user_stats: {
        Row: {
          count: number | null
          event: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      commentable_entity_type: 'METRIC' | 'METRIC_DATA_POINT'
      metric_interval: 'minute' | 'hour' | 'day' | 'week' | 'month'
      user_event:
        | 'view_page'
        | 'add_metric'
        | 'add_data_point'
        | 'update_avatar'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'objects_bucketId_fkey'
            columns: ['bucket_id']
            isOneToOne: false
            referencedRelation: 'buckets'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
      Database['public']['Views'])
  ? (Database['public']['Tables'] &
      Database['public']['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
  ? Database['public']['Enums'][PublicEnumNameOrOptions]
  : never
