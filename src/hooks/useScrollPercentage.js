import { useState, useEffect } from "react";

export default function useScrollPercentage()
{
  const [scroll, setScroll] = useState(0);

  const scrollHandler = () =>
  {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = `${totalScroll / windowHeight}`;

    setScroll(scrollPercentage);
  }

  useEffect(() =>
  {
    if (typeof window !== "undefined")
    {
      window.addEventListener("scroll", scrollHandler);
    }
    return () =>
    {
      if (typeof window !== "undefined")
      {
        window.removeEventListener("scroll", scrollHandler);
      }
    };
  }, [scroll]);

  return scroll;
}
