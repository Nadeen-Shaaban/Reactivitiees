/* eslint-disable @typescript-eslint/no-unused-vars */
import { observer } from "mobx-react-lite";
import React from "react";
import { Grid,} from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import ActivityList from "./dashboard/ActivityList";
import ActivityDetails from "./details/ActivityDetails";
import ActivityForm from "./form/ActivityForm";


export default observer(function ActivityDashboard() {

        const {activityStore} = useStore();
        const {selectedActivity, editMode} = activityStore;
    return (
        <Grid>
        <Grid.Column width='10'>
                <ActivityList />

        </Grid.Column>
        <Grid.Column width='6'>
            {selectedActivity && !editMode &&
            <ActivityDetails />}
            {editMode &&
            <ActivityForm/>}
        </Grid.Column>
        </Grid>
    )
})