import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState, useEffect, Fragment, SyntheticEvent } from "react";
import { Host } from "../../@types/Host";
import HostService from "../../service/host.service";

const FilterTagList: React.FC<{
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}> = React.memo(({tags, setTags}) => {
  const [tagList, setTagList] = useState<Host.Info["tags"]>([]);

  useEffect(() => {
    HostService.getAllTags()
      .then((tags) => setTagList(tags))
      .catch((error) => console.error(error));
  }, []);

  function handleTag(tag: string) {
    return (e: SyntheticEvent<Element, Event>, checked: boolean) => {
      setTags((prevState) => {
        if (checked) {
          return [...prevState, tag];
        } else {
          return prevState.filter((t: string) => t !== tag);
        }
      });
    };
  }

  return (
    <Fragment>
      {tagList.map((tag) => (
        <FormControlLabel
          control={<Checkbox />}
          label={tag}
          checked={[tags].flat().some((t: string) => t === tag)}
          onChange={handleTag(tag)}
          key={tag}
        />
      ))}
    </Fragment>
  );
});

export default FilterTagList;
