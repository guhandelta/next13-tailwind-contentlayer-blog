// fn() that accepts an array of CSS classNames, and filters the array to remove any empty strings, null or undefined and later adds them into a single string separated by a " "
export const cx = (...classnames) => classnames.filter(Boolean).join(" ");