import { Counter } from "./counter";

export const metadata = () => {
    return {
        title: "Count"
    }
};

export default function CounterPage() {
    return <Counter />
}