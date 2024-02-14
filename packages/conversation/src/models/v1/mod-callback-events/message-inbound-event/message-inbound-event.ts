import { MessageInboundEventItem } from '../message-inbound-event-item';
import { ConversationEvent } from '../conversation-event';

/**
 * This callback delivers contact (end-user) messages to the API clients.
 */
export interface MessageInboundEvent extends ConversationEvent {

  /** Id of the subscribed app. */
  app_id?: string;
  /** Timestamp marking when the channel callback was accepted/received by the Conversation API. */
  accepted_time?: Date;
  /** Timestamp of the event as provided by the underlying channels. */
  event_time?: Date;
  /** The project ID of the app which has subscribed for the callback. */
  project_id?: string;
  /** Context-dependent metadata. Refer to specific callback's documentation for exact information provided. */
  message_metadata?: string;
  /** The value provided in field correlation_id of a send message request. */
  correlation_id?: string;
  /** @see MessageInboundEventItem */
  message?: MessageInboundEventItem;
  /** Name of the trigger responsible for this event. */
  trigger: 'MESSAGE_INBOUND';
}
