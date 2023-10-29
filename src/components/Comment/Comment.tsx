import * as React from "react";
import {
  InputHTMLAttributes,
  ReactChild,
  ReactFragment,
  ReactPortal,
  forwardRef,
} from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utility/functions";
import Tag from "../Tag/Tag";
import LockIcon from "@mui/icons-material/Lock";

const CommentVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CommentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CommentVariants> {
  avatar?: any;
  author?: string;
  type?: string;
  time?: string;
  edited?: string;
  content?: any;
  restrictedTo?: string;
  action?: boolean;
}

const Comment = forwardRef<HTMLInputElement, CommentProps>(
  (
    { avatar, type, content, time, author, edited, restrictedTo, ...props },
    ref
  ) => {
    return (
      <div className="flex gap-2">
        <div className="comment-avatar w-space.500">{avatar}</div>
        <div className="comment-body">
          <div className="comment-header flex items-center gap-2">
            {author ? <span className="text-subtle font-semibold">{author}</span> : ""}
            {type ? (
              <span className="header-author font-bold text-subtle">
                <Tag label={type} />
              </span>
            ) : (
              ""
            )}
            {time ? (
              <span className="header-date text-subtle">{time}</span>
            ) : (
              ""
            )}
            {edited ? (
              <span className="header-edited text-subtlest">{edited}</span>
            ) : (
              ""
            )}
            {restrictedTo ? (
              <span className="header-restrict flex gap-1 items-center text-subtlest">
                •
                <div className="mb-[3px]">
                  <LockIcon sx={{ fontSize: "1rem" }} />
                </div>
                <div>{restrictedTo}</div>
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="comment-content mb-[6px]">{content}</div>
          <div className="action-items flex items-center gap-2 font-semibold text-subtle">
            <span className="reply cursor-pointer hover:underline">Reply</span>
            <span>·</span>
            <span className="edit cursor-pointer hover:underline">Edit</span>
            <span>·</span>
            <span className="like cursor-pointer hover:underline">Like</span>
          </div>
        </div>
      </div>
    );
  }
);

export default Comment;
