/// <reference types="@sveltejs/kit" />

type Transaction = {
    id: string;
    updated_at: Date;
    description: string;
    amount: boolean;
    category: string;
    state: string;
}
