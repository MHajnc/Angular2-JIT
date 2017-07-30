class EventDetails {
    ReopenedDate: string;
    CloseDate: string;
    UserId: string;
}

export class Event {
    id: string;
    userName: string;
    recordId: string;
    name: string;
    occurredOn: string;
    details: EventDetails;
}