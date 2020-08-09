import React from 'react';
import { Title, Subheading } from '../Typography';
import { useRouteData } from 'react-static';
import { RandomLootRouteData } from '../../../types/static';
import { Loot } from '../../../types/dnd';
import { LootCard } from './RandomLoot/LootCard';
import { selectRandom } from '../../util/random';

function getTaggedLoot(loot: Loot[], tags: string[]): Loot[] {
  return loot.filter(l => l.tags.some(t => tags.includes(t)));
}

function getTypedLoot(loot: Loot[], type: string): Loot[] {
  return loot.filter(l => l.type === type);
}

const RandomLoot: React.FC = props => {
  const { loot, lootTags, lootTypes } = useRouteData<RandomLootRouteData>();
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [randomLoot, setRandomLoot] = React.useState<Loot[]>([]);

  const tagChange = React.useCallback(
    (tag: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        setSelectedTags(prev => [...prev, tag]);
      } else {
        const newTags = [...selectedTags];
        newTags.splice(newTags.indexOf(tag), 1);
        setSelectedTags(newTags);
      }
    },
    [selectedTags]
  );

  const filteredLoot = React.useMemo(() => {
    if (selectedTags.length !== 0) {
      return getTaggedLoot(loot, selectedTags);
    }
    return loot;
  }, [loot, selectedTags]);

  const randomTypeClick = React.useCallback(
    (type: string) => () => {
      const typed = getTypedLoot(filteredLoot, type);
      setRandomLoot(selectRandom(typed));
    },
    [filteredLoot]
  );

  return (
    <div>
      <Title>Random Loot</Title>
      <div>
        {lootTags.map(t => (
          <label key={t} htmlFor={t}>
            <input id={t} type="checkbox" onChange={tagChange(t)} />
            {t}
          </label>
        ))}
      </div>
      <div>
        <Subheading>By Type</Subheading>
        {lootTypes.map(t => (
          <div>
            <button key={t} type="button" onClick={randomTypeClick(t)}>
              {t}
            </button>
          </div>
        ))}
      </div>
      <div>
        {randomLoot.map(l => (
          <LootCard key={l.name} {...l} />
        ))}
      </div>
    </div>
  );
};

export default RandomLoot;
