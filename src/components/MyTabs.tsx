import React from "react";
import { StyleSheet } from "react-native";
import { ScrollableTab, Text, Tab, Tabs, Icon, TabHeading } from "native-base";
import Chats from "./Chats";
import Status from "./Status";
import Calls from "./Calls";
import ThemeColors from "../constants/ThemeColors";

interface ChatModel {
  contactName: string;
  contactAvatar: string;
  snippet: string;
  time: Date;
}

interface StatusModel {
  contactName: string;
  contactAvatar: string;
  time: Date;
}

interface CallModel {
  contactName: string;
  contactAvatar: string;
  time: Date;
}

export default class MyTabs extends React.Component {
  state = {
    chats: this.getChats(),
    statusItems: this.getStatusItems(),
    calls: this.getCalls(),
    user: {
      avatar:
        "https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-yoda.png"
    }
  };

  render() {
    return (
      <Tabs
        initialPage={1}
        renderTabBar={() => (
          <ScrollableTab style={{ backgroundColor: ThemeColors.primary }} />
        )}
      >
        <Tab
          heading={
            <TabHeading style={styles.tabStyle}>
              <Icon style={styles.tabText} name="camera" />
            </TabHeading>
          }
        >
          <Text>camera</Text>
        </Tab>
        <Tab
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.tabStyle}
          textStyle={styles.tabText}
          activeTextStyle={styles.activeTabText}
          heading="chats"
        >
          <Chats chats={this.state.chats} />
        </Tab>
        <Tab
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.tabStyle}
          textStyle={styles.tabText}
          activeTextStyle={styles.activeTabText}
          heading="status"
        >
          <Status statusItems={this.state.statusItems} user={this.state.user} />
        </Tab>
        <Tab
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.tabStyle}
          textStyle={styles.tabText}
          activeTextStyle={styles.activeTabText}
          heading="calls"
        >
          <Calls calls={this.state.calls} />
        </Tab>
      </Tabs>
    );
  }

  getChats(): ChatModel[] {
    return [
      {
        contactName: "Mom",
        contactAvatar:
          "https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-finn.png",
        snippet: "Listen, I've had a pretty messed up day...",
        time: new Date(Date.now())
      },
      {
        contactName: "Chandu",
        contactAvatar:
          "https://raw.githubusercontent.com/GowravKrishnaBoyapati/WhtasApp-Clone/master/chandu.png",
        snippet: "I've got enough on my plate as it is, and I...",
        time: new Date(Date.now())
      },
      {
        contactName: "Sai",
        contactAvatar:
          "https://raw.githubusercontent.com/GowravKrishnaBoyapati/WhtasApp-Clone/master/sai.png",
        snippet: "You will remove these restraints and leave...",
        time: new Date(Date.now())
      },
      {
        contactName: "Chinnu",
        contactAvatar:
          "https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-luke.png",
        snippet: "I feel the good in you, the conflict...",
        time: new Date(Date.now())
      }
    ];
  }

  getStatusItems(): StatusModel[] {
    return [
      {
        contactName: "Mom",
        contactAvatar:
          "https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-finn.png",
        time: new Date(Date.now())
      },
      {
        contactName: "Chandu",
        contactAvatar:
          "https://raw.githubusercontent.com/GowravKrishnaBoyapati/WhtasApp-Clone/master/chandu.png",
        time: new Date(Date.now())
      },
      {
        contactName: "Sai",
        contactAvatar:
          "https://raw.githubusercontent.com/GowravKrishnaBoyapati/WhtasApp-Clone/master/sai.png",
        time: new Date(Date.now())
      },
      {
        contactName: "Chinnu",
        contactAvatar:
          "https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-luke.png",
        time: new Date(Date.now())
      }
    ];
  }

  getCalls(): CallModel[] {
    return [
      {
        contactName: "Mom",
        contactAvatar:
          "https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-finn.png",
        time: new Date("12/4/2019")
      },
      {
        contactName: "Sai",
        contactAvatar:
          "https://raw.githubusercontent.com/GowravKrishnaBoyapati/WhtasApp-Clone/master/sai.png",
        time: new Date("2/12/2020")
      },
      {
        contactName: "Chandu",
        contactAvatar:
          "https://raw.githubusercontent.com/GowravKrishnaBoyapati/WhtasApp-Clone/master/chandu.png",
        time: new Date("2/16/2020")
      },
      {
        contactName: "Chinnu",
        contactAvatar:
          "https://raw.githubusercontent.com/ionic-team/ionic-docs/master/src/demos/api/list/avatar-luke.png",
        time: new Date("1/30/2020")
      }
    ];
  }
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: ThemeColors.primary
  },
  tabText: {
    textTransform: "uppercase",
    color: "lightgrey"
  },
  activeTabText: {
    textTransform: "uppercase",
    color: "white"
  }
});
