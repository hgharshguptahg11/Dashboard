// Open source avatar service using placeholder services
export const getAvatarUrl = (userId, size = 24) => {
  // Using DiceBear API for consistent, open source avatars
  const seed = userId.toString();
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&size=${size}`;
};

// Alternative using UI Avatars (also open source)
export const getUIAvatarUrl = (name, size = 24) => {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    initials
  )}&size=${size}&background=random`;
};

// Using Gravatar as fallback (open source)
export const getGravatarUrl = (email, size = 24) => {
  const hash = email.toLowerCase().trim();
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
};
