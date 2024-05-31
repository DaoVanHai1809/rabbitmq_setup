import { UserRelations as _UserRelations } from './user_relations';
import { PostRelations as _PostRelations } from './post_relations';
import { User as _User } from './user';
import { Post as _Post } from './post';

export namespace PrismaModel {
  export class UserRelations extends _UserRelations {}
  export class PostRelations extends _PostRelations {}
  export class User extends _User {}
  export class Post extends _Post {}

  export const extraModels = [UserRelations, PostRelations, User, Post];
}
