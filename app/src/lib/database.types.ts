export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
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
      comments: {
        Row: {
          body: string
          created_at: string | null
          id: string
          profile_id: string
          reply_to_comment_id: string | null
          thread_id: string
          updated_at: string | null
        }
        Insert: {
          body: string
          created_at?: string | null
          id?: string
          profile_id?: string
          reply_to_comment_id?: string | null
          thread_id: string
          updated_at?: string | null
        }
        Update: {
          body?: string
          created_at?: string | null
          id?: string
          profile_id?: string
          reply_to_comment_id?: string | null
          thread_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_reply_to_comment_id_fkey"
            columns: ["reply_to_comment_id"]
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_thread_id_fkey"
            columns: ["thread_id"]
            referencedRelation: "threads"
            referencedColumns: ["id"]
          }
        ]
      }
      imports: {
        Row: {
          created_at: string
          errors: Json | null
          file_name: string
          file_path: string
          file_type: string
          id: string
          mapping: Json | null
          metadata: Json | null
          status: Database["public"]["Enums"]["import_status"]
          team_id: string
          updated_at: string
          uploaded_by: string | null
        }
        Insert: {
          created_at?: string
          errors?: Json | null
          file_name: string
          file_path: string
          file_type: string
          id?: string
          mapping?: Json | null
          metadata?: Json | null
          status?: Database["public"]["Enums"]["import_status"]
          team_id: string
          updated_at?: string
          uploaded_by?: string | null
        }
        Update: {
          created_at?: string
          errors?: Json | null
          file_name?: string
          file_path?: string
          file_type?: string
          id?: string
          mapping?: Json | null
          metadata?: Json | null
          status?: Database["public"]["Enums"]["import_status"]
          team_id?: string
          updated_at?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "imports_team_id_fkey"
            columns: ["team_id"]
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "imports_uploaded_by_fkey"
            columns: ["uploaded_by"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      metrics: {
        Row: {
          archived: boolean | null
          created_at: string
          description: string | null
          icon: string | null
          id: string
          interval: Database["public"]["Enums"]["metric_interval"]
          name: string
          tags: string[] | null
          team_id: string
          unit_short: string | null
          updated_at: string
        }
        Insert: {
          archived?: boolean | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          interval: Database["public"]["Enums"]["metric_interval"]
          name: string
          tags?: string[] | null
          team_id: string
          unit_short?: string | null
          updated_at?: string
        }
        Update: {
          archived?: boolean | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          interval?: Database["public"]["Enums"]["metric_interval"]
          name?: string
          tags?: string[] | null
          team_id?: string
          unit_short?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "metrics_team_id_fkey"
            columns: ["team_id"]
            referencedRelation: "teams"
            referencedColumns: ["id"]
          }
        ]
      }
      metrics_data_points: {
        Row: {
          metric_id: string
          reported_by: string | null
          time: string
          value: number
        }
        Insert: {
          metric_id: string
          reported_by?: string | null
          time: string
          value: number
        }
        Update: {
          metric_id?: string
          reported_by?: string | null
          time?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "metrics_data_points_metric_id_fkey"
            columns: ["metric_id"]
            referencedRelation: "metrics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "metrics_data_points_reported_by_fkey"
            columns: ["reported_by"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
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
            foreignKeyName: "metrics_owners_metric_id_fkey"
            columns: ["metric_id"]
            referencedRelation: "metrics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "metrics_owners_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          metadata: Json | null
          profile_id: string
          text: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          profile_id: string
          text?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          profile_id?: string
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
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
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
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
            foreignKeyName: "team_members_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            referencedRelation: "teams"
            referencedColumns: ["id"]
          }
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
          created_at: string | null
          created_by: string
          from_timestamp: string | null
          id: string
          metric_id: string
          team_id: string
          title: string
          to_timestamp: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string
          from_timestamp?: string | null
          id?: string
          metric_id: string
          team_id: string
          title: string
          to_timestamp?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          from_timestamp?: string | null
          id?: string
          metric_id?: string
          team_id?: string
          title?: string
          to_timestamp?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "threads_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "threads_metric_id_fkey"
            columns: ["metric_id"]
            referencedRelation: "metrics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "threads_team_id_fkey"
            columns: ["team_id"]
            referencedRelation: "teams"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      distinct_tags: {
        Args: {
          team_id: string
        }
        Returns: unknown
      }
    }
    Enums: {
      import_status: "file_uploaded" | "data_importing" | "finished" | "failed"
      metric_interval: "minute" | "hour" | "day" | "week" | "month"
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
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
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

