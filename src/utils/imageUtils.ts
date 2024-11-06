export const getImagePath = (imagePath: string) => {
    // Handle cases where imagePath might not start with a slash
    const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return `${process.env.PUBLIC_URL}${normalizedPath}`;
  };
  
  // Also add a function to check if an image exists
  export const imageExists = async (imagePath: string) => {
    try {
      const response = await fetch(getImagePath(imagePath));
      return response.ok;
    } catch (error) {
      console.error('Error checking image:', error);
      return false;
    }
  };