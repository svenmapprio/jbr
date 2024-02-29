<script setup lang="ts">
    const {data} = useFetch("/api/info");

    watchEffect(() => {
        console.log(data);
    });

    const getSetValue = <K, V>(key: K, map: Map<K, V>, create: () => V) => {
        let entry = map.get(key);

        if(!entry) {
            entry = create();

            map.set(key, entry);
        }

        return entry;
    }

    const groupActivities = (activities: NonNullable<typeof data.value>["education"] | NonNullable<typeof data.value>["projects"] | NonNullable<typeof data.value>["residencies"] ) => {
        const groups: Map<number, {year: number, entries: string[]}> = new Map();

        const arrFlat = activities;

        for(let i = 0; i < arrFlat.length; i++){
            const entry = arrFlat[i];

            if(entry.from === null) continue;

            const year = new Date(entry.from).getFullYear();

            const group = getSetValue(year, groups, () => ({year, entries: []}));

            group.entries.push(entry.text ?? "");
        }

        return Array.from(groups.values()).sort((a, b) => b.year - a.year);
    }

    const name = computed(() => `${data.value?.firstName}${data.value?.lastName ? ` ${data.value?.lastName}` : ''}`);
    const links = computed(() => (data.value?.links.filter(link => !!link.label && !!link.link) ?? []) as {link: string, label: string}[]);
    const educationGrouped = computed(() => groupActivities(data.value?.education ?? []));
    const projectsGrouped = computed(() => groupActivities(data.value?.projects ?? []));
    const residenciesGrouped = computed(() => groupActivities(data.value?.residencies ?? []));
</script>
<template>
    <Column style="padding-bottom: 50px">
        <h1>{{ name }}</h1>
        <p style="text-align: center;">Address: {{ data?.address }}, Email: <a :href="`mailto:${data?.email}`"> {{ data?.email }} </a>, Phone: {{ data?.phone }}</p>
        <h4>Web:</h4>
        <a class="weblink" v-for="link in links" :href="link.link">{{ link.label }}</a>
        <h4>Bio:</h4>
        <p>{{ data?.bio }}</p>
        <h4>Education:</h4>
        <template v-for="group in educationGrouped">
            <p>{{ group.year }}:</p>
            <p v-for="entry in group.entries" :key="entry">- {{ entry }}</p>
        </template>
        <h4>Exhibitions, Performances and Seminars:</h4>
        <template v-for="group in projectsGrouped">
            <p>{{ group.year }}:</p>
            <p v-for="entry in group.entries" :key="entry">- {{ entry }}</p>
        </template>
        <h4>Artist in Residence:</h4>
        <template v-for="group in residenciesGrouped">
            <p>{{ group.year }}:</p>
            <p v-for="entry in group.entries" :key="entry">- {{ entry }}</p>
        </template>
    </Column>
</template>
<style scoped>
    p{
        margin: 0;
        white-space: pre-line;
    }

    h1, h4, a.weblink{
        text-align: center;
    }
</style>