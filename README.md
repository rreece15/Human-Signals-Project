README from to install swagger_client for Strava API below.
Source: https://github.com/sladkovm/strava-swagger-client

# swagger-client

Strava API

This Python package is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 3.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.PythonClientCodegen

## Requirements.

Python 2.7 and 3.4+

## Installation & Usage

### pip install

If the python package is hosted on Github, you can install directly from Github

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```

(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:

```python
import swagger_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```

(or `sudo python setup.py install` to install the package for all users)

Then import the package:

```python
import swagger_client
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure OAuth2 access token for authorization: strava_oauth
configuration = swagger_client.Configuration()
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# create an instance of the API class
api_instance = swagger_client.ActivitiesApi(swagger_client.ApiClient(configuration))
name = 'name_example' # str | The name of the activity.
type = 'type_example' # str | Type of activity. For example - Run, Ride etc.
start_date_local = swagger_client.ERRORUNKNOWN() # ERRORUNKNOWN | ISO 8601 formatted date time.
elapsed_time = 56 # int | In seconds.
description = 'description_example' # str | Description of the activity. (optional)
distance = 3.4 # float | In meters. (optional)
trainer = 56 # int | Set to 1 to mark as a trainer activity. (optional)
photo_ids = swagger_client.ERRORUNKNOWN() # ERRORUNKNOWN | List of native photo ids to attach to the activity. (optional)
commute = 56 # int | Set to 1 to mark as commute. (optional)

try:
    # Create an Activity
    api_response = api_instance.create_activity(name, type, start_date_local, elapsed_time, description=description, distance=distance, trainer=trainer, photo_ids=photo_ids, commute=commute)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ActivitiesApi->create_activity: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://www.strava.com/api/v3*

| Class               | Method                                                                                                   | HTTP request                          | Description                |
| ------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------- | -------------------------- |
| _ActivitiesApi_     | [**create_activity**](docs/ActivitiesApi.md#create_activity)                                             | **POST** /activities                  | Create an Activity         |
| _ActivitiesApi_     | [**get_activity_by_id**](docs/ActivitiesApi.md#get_activity_by_id)                                       | **GET** /activities/{id}              | Get Activity               |
| _ActivitiesApi_     | [**get_comments_by_activity_id**](docs/ActivitiesApi.md#get_comments_by_activity_id)                     | **GET** /activities/{id}/comments     | List Activity Comments     |
| _ActivitiesApi_     | [**get_kudoers_by_activity_id**](docs/ActivitiesApi.md#get_kudoers_by_activity_id)                       | **GET** /activities/{id}/kudos        | List Activity Kudoers      |
| _ActivitiesApi_     | [**get_laps_by_activity_id**](docs/ActivitiesApi.md#get_laps_by_activity_id)                             | **GET** /activities/{id}/laps         | List Activity Laps         |
| _ActivitiesApi_     | [**get_logged_in_athlete_activities**](docs/ActivitiesApi.md#get_logged_in_athlete_activities)           | **GET** /athlete/activities           | List Athlete Activities    |
| _ActivitiesApi_     | [**get_zones_by_activity_id**](docs/ActivitiesApi.md#get_zones_by_activity_id)                           | **GET** /activities/{id}/zones        | Get Activity Zones         |
| _ActivitiesApi_     | [**update_activity_by_id**](docs/ActivitiesApi.md#update_activity_by_id)                                 | **PUT** /activities/{id}              | Update Activity            |
| _AthletesApi_       | [**get_logged_in_athlete**](docs/AthletesApi.md#get_logged_in_athlete)                                   | **GET** /athlete                      | Get Authenticated Athlete  |
| _AthletesApi_       | [**get_logged_in_athlete_zones**](docs/AthletesApi.md#get_logged_in_athlete_zones)                       | **GET** /athlete/zones                | Get Zones                  |
| _AthletesApi_       | [**get_stats**](docs/AthletesApi.md#get_stats)                                                           | **GET** /athletes/{id}/stats          | Get Athlete Stats          |
| _AthletesApi_       | [**update_logged_in_athlete**](docs/AthletesApi.md#update_logged_in_athlete)                             | **PUT** /athlete                      | Update Athlete             |
| _ClubsApi_          | [**get_club_activities_by_id**](docs/ClubsApi.md#get_club_activities_by_id)                              | **GET** /clubs/{id}/activities        | List Club Activities       |
| _ClubsApi_          | [**get_club_admins_by_id**](docs/ClubsApi.md#get_club_admins_by_id)                                      | **GET** /clubs/{id}/admins            | List Club Administrators.  |
| _ClubsApi_          | [**get_club_by_id**](docs/ClubsApi.md#get_club_by_id)                                                    | **GET** /clubs/{id}                   | Get Club                   |
| _ClubsApi_          | [**get_club_members_by_id**](docs/ClubsApi.md#get_club_members_by_id)                                    | **GET** /clubs/{id}/members           | List Club Members          |
| _ClubsApi_          | [**get_logged_in_athlete_clubs**](docs/ClubsApi.md#get_logged_in_athlete_clubs)                          | **GET** /athlete/clubs                | List Athlete Clubs         |
| _GearsApi_          | [**get_gear_by_id**](docs/GearsApi.md#get_gear_by_id)                                                    | **GET** /gear/{id}                    | Get Equipment              |
| _RoutesApi_         | [**get_route_as_gpx**](docs/RoutesApi.md#get_route_as_gpx)                                               | **GET** /routes/{id}/export_gpx       | Export Route GPX           |
| _RoutesApi_         | [**get_route_as_tcx**](docs/RoutesApi.md#get_route_as_tcx)                                               | **GET** /routes/{id}/export_tcx       | Export Route TCX           |
| _RoutesApi_         | [**get_route_by_id**](docs/RoutesApi.md#get_route_by_id)                                                 | **GET** /routes/{id}                  | Get Route                  |
| _RoutesApi_         | [**get_routes_by_athlete_id**](docs/RoutesApi.md#get_routes_by_athlete_id)                               | **GET** /athletes/{id}/routes         | List Athlete Routes        |
| _RunningRacesApi_   | [**get_running_race_by_id**](docs/RunningRacesApi.md#get_running_race_by_id)                             | **GET** /running_races/{id}           | Get Running Race           |
| _RunningRacesApi_   | [**get_running_races**](docs/RunningRacesApi.md#get_running_races)                                       | **GET** /running_races                | List Running Races         |
| _SegmentEffortsApi_ | [**get_efforts_by_segment_id**](docs/SegmentEffortsApi.md#get_efforts_by_segment_id)                     | **GET** /segments/{id}/all_efforts    | List Segment Efforts       |
| _SegmentEffortsApi_ | [**get_segment_effort_by_id**](docs/SegmentEffortsApi.md#get_segment_effort_by_id)                       | **GET** /segment_efforts/{id}         | Get Segment Effort         |
| _SegmentsApi_       | [**explore_segments**](docs/SegmentsApi.md#explore_segments)                                             | **GET** /segments/explore             | Explore segments           |
| _SegmentsApi_       | [**get_leaderboard_by_segment_id**](docs/SegmentsApi.md#get_leaderboard_by_segment_id)                   | **GET** /segments/{id}/leaderboard    | Get Segment Leaderboard    |
| _SegmentsApi_       | [**get_logged_in_athlete_starred_segments**](docs/SegmentsApi.md#get_logged_in_athlete_starred_segments) | **GET** /segments/starred             | List Starred Segments      |
| _SegmentsApi_       | [**get_segment_by_id**](docs/SegmentsApi.md#get_segment_by_id)                                           | **GET** /segments/{id}                | Get Segment                |
| _SegmentsApi_       | [**star_segment**](docs/SegmentsApi.md#star_segment)                                                     | **PUT** /segments/{id}/starred        | Star Segment               |
| _StreamsApi_        | [**get_activity_streams**](docs/StreamsApi.md#get_activity_streams)                                      | **GET** /activities/{id}/streams      | Get Activity Streams       |
| _StreamsApi_        | [**get_segment_effort_streams**](docs/StreamsApi.md#get_segment_effort_streams)                          | **GET** /segment_efforts/{id}/streams | Get segment effort streams |
| _StreamsApi_        | [**get_segment_streams**](docs/StreamsApi.md#get_segment_streams)                                        | **GET** /segments/{id}/streams        | Get Segment Streams        |
| _UploadsApi_        | [**create_upload**](docs/UploadsApi.md#create_upload)                                                    | **POST** /uploads                     | Upload Activity            |
| _UploadsApi_        | [**get_upload_by_id**](docs/UploadsApi.md#get_upload_by_id)                                              | **GET** /uploads/{uploadId}           | Get Upload                 |

## Documentation For Models

- [ActivityStats](docs/ActivityStats.md)
- [ActivityTotal](docs/ActivityTotal.md)
- [ActivityType](docs/ActivityType.md)
- [ActivityZone](docs/ActivityZone.md)
- [BaseStream](docs/BaseStream.md)
- [Comment](docs/Comment.md)
- [Error](docs/Error.md)
- [ExplorerResponse](docs/ExplorerResponse.md)
- [ExplorerSegment](docs/ExplorerSegment.md)
- [Fault](docs/Fault.md)
- [HeartRateZoneRanges](docs/HeartRateZoneRanges.md)
- [Lap](docs/Lap.md)
- [LatLng](docs/LatLng.md)
- [MetaActivity](docs/MetaActivity.md)
- [MetaAthlete](docs/MetaAthlete.md)
- [MetaClub](docs/MetaClub.md)
- [PhotosSummary](docs/PhotosSummary.md)
- [PhotosSummaryPrimary](docs/PhotosSummaryPrimary.md)
- [PolylineMap](docs/PolylineMap.md)
- [PowerZoneRanges](docs/PowerZoneRanges.md)
- [Route](docs/Route.md)
- [RouteDirection](docs/RouteDirection.md)
- [RunningRace](docs/RunningRace.md)
- [SegmentLeaderboard](docs/SegmentLeaderboard.md)
- [SegmentLeaderboardEntry](docs/SegmentLeaderboardEntry.md)
- [Split](docs/Split.md)
- [StreamSet](docs/StreamSet.md)
- [SummaryGear](docs/SummaryGear.md)
- [SummarySegment](docs/SummarySegment.md)
- [SummarySegmentEffort](docs/SummarySegmentEffort.md)
- [TimedZoneDistribution](docs/TimedZoneDistribution.md)
- [UpdatableActivity](docs/UpdatableActivity.md)
- [Upload](docs/Upload.md)
- [ZoneRange](docs/ZoneRange.md)
- [ZoneRanges](docs/ZoneRanges.md)
- [Zones](docs/Zones.md)
- [AltitudeStream](docs/AltitudeStream.md)
- [CadenceStream](docs/CadenceStream.md)
- [DetailedGear](docs/DetailedGear.md)
- [DetailedSegment](docs/DetailedSegment.md)
- [DetailedSegmentEffort](docs/DetailedSegmentEffort.md)
- [DistanceStream](docs/DistanceStream.md)
- [HeartrateStream](docs/HeartrateStream.md)
- [LatLngStream](docs/LatLngStream.md)
- [MovingStream](docs/MovingStream.md)
- [PowerStream](docs/PowerStream.md)
- [SmoothGradeStream](docs/SmoothGradeStream.md)
- [SmoothVelocityStream](docs/SmoothVelocityStream.md)
- [SummaryActivity](docs/SummaryActivity.md)
- [SummaryAthlete](docs/SummaryAthlete.md)
- [SummaryClub](docs/SummaryClub.md)
- [TemperatureStream](docs/TemperatureStream.md)
- [TimeStream](docs/TimeStream.md)
- [TimedZoneRange](docs/TimedZoneRange.md)
- [DetailedActivity](docs/DetailedActivity.md)
- [DetailedAthlete](docs/DetailedAthlete.md)
- [DetailedClub](docs/DetailedClub.md)

## Documentation For Authorization

## strava_oauth

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://www.strava.com/api/v3/oauth/authorize
- **Scopes**:
- **read**: Read public segments, public routes, public profile data, public posts, public events, club feeds, and leaderboards
- **read_all**: Read private routes, private segments, and private events for the user
- **profile:read_all**: Read all profile information even if the user has set their profile visibility to Followers or Only You
- **profile:write**: Update the user's weight and Functional Threshold Power (FTP), and access to star or unstar segments on their behalf
- **activity:read**: Read the user's activity data for activities that are visible to Everyone and Followers, excluding privacy zone data
- **activity:read_all**: The same access as activity:read, plus privacy zone data and access to read the user's activities with visibility set to Only You
- **activity:write**: Access to create manual activities and uploads, and access to edit any activities that are visible to the app, based on activity read access level

## Author
