import { parseISO,format } from "date-fns";    
import it from "date-fns/locale/it"

export default function Date({dateString}) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'd LLLL yyyy',{locale:it})}</time>
}