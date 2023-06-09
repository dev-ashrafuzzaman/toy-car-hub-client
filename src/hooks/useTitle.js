import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `ToyCarHub | ${title} `;
    }, [title])
};

export default useTitle;