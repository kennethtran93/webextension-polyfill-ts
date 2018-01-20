/**
 * Namespace: browser.idle
 * Generated from Mozilla sources
 *
 * Use the <code>browser.idle</code> API to detect when the machine's idle state changes.
 * Permissions: "idle"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./Events";

export namespace Idle {
    export type IdleState = "active" | "idle";

    export interface Static {

        /**
         * Returns "idle" if the user has not generated any input for a specified number of seconds, or "active" otherwise.
         *
         * @param detectionIntervalInSeconds The system is considered idle if detectionIntervalInSeconds seconds have elapsed since the last user input detected.
         * @returns Promise<IdleState>
         */
        queryState(detectionIntervalInSeconds: number): Promise<IdleState>;

        /**
         * Sets the interval, in seconds, used to determine when the system is in an idle state for onStateChanged events. The default interval is 60 seconds.
         *
         * @param intervalInSeconds Threshold, in seconds, used to determine when the system is in an idle state.
         */
        setDetectionInterval(intervalInSeconds: number): void;

        /**
         * Fired when the system changes to an active or idle state. The event fires with "idle" if the the user has not generated any input for a specified number of seconds, and "active" when the user generates input on an idle system.
         *
         * @param newState
         */
        onStateChanged: Events.Event<(newState: IdleState) => void>;
    }
}
