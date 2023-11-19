import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { map, prop, find, propEq } from "ramda";
import htmlIcon from "../../assets/htnlIcon";
import cssIcon from "../../assets/cssIcon.js";
import jsIcon from "../../assets/jsIcon.js";
import github from "../../assets/github.js";

const tagData = [
  { name: "HTML", icon: htmlIcon, iconName: "HTML" },
  { name: "CSS", icon: cssIcon, iconName: "CSS" },
  { name: "JS", icon: jsIcon, iconName: "JS" },
  { name: "github", icon: github, iconName: "github" },
];

const TagComponent = ({ tag, onPress }) => {
  const tagInfo = find(propEq("name", tag))(tagData);
  const tagIcon = tagInfo ? tagInfo.icon : null;
  const icon = getIcon(tag);

  function getIcon(iconName) {
    switch (iconName) {
      case "HTML":
        return htmlIcon;
      case "CSS":
        return cssIcon;
      case "JS":
        return jsIcon;
      case "github":
        return github;
      default:
        return null;
    }
  }

  return (
    <TouchableOpacity onPress={() => onPress(tag)}>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "black",
          gap: 10,
          alignItems: "center",
          padding: 5,
        }}
      >
        <Text>{tag}</Text>
        <View style={{paddingTop: 3}}>
          {icon && (
            <React.Fragment>{icon({ width: 25, height: 25 })}</React.Fragment>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TagsComponent = ({ selectedTags, onTagPress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        borderColor: "black",
        gap: 10,
      }}
    >
      {tagData.map((tag) => (
        <TagComponent
          key={tag.name}
          tag={tag.name}
          onPress={onTagPress}
          iconName={tag.iconName || tag.name}
          isSelected={selectedTags.includes(tag.name)}
        />
      ))}
    </View>
  );
};

export default TagsComponent;
