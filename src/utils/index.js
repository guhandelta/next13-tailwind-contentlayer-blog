import { compareDesc, parseISO } from "date-fns";

// fn() that accepts an array of CSS classNames, and filters the array to remove any empty strings, null or undefined and later adds them into a single string separated by a " "
export const cx = (...classnames) => classnames.filter(Boolean).join(" ");

// Function to sort the blogposts from latest to oldest
export const sortBlogs = blogs => {
    return blogs.slice().sort((a,b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)))
}