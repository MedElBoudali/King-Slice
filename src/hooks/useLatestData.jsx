import { useState, useEffect } from "react";

const useLatestData = () => {
  const [hotSlices, setHotSlices] = useState();
  const [sliceKings, setSliceKings] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `query {
                StoreSettings(id: "downtown") {
                    name
                    sliceKings {
                    name
                    slug {
                        current
                    }
                    description
                    }
                    hotSlices {
                    name
                    slug {
                        current
                    }
                    toppings {
                        name
                        vegetarian
                    }
                    }
                }
                }`,
          }),
        });

        if (!res.ok) {
          throw new Error(`HTTP Status: ${res.status}`);
        }

        const {
          data: {
            StoreSettings: { hotSlices: HotSlices, sliceKings: Slicekings },
          },
        } = await res.json();

        setHotSlices(HotSlices);
        setSliceKings(Slicekings);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return {
    hotSlices,
    sliceKings,
  };
};

export default useLatestData;
