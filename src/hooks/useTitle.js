import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - ToyCarHub`;
    }, [title])
};

export default useTitle;