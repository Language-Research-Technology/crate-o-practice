<script setup>
import { ElRow, ElCol, ElTable, ElTableColumn } from 'element-plus';

const tableData = [
  {
    metadata_group: 'About',
    description: 'The core metadata for this RO-Crate and its subject matter.'
  },
  {
    metadata_group: 'Related People, Orgs & Works',
    description: 'The context for the creation of this RO-Crate; who made it, funded it etc.'
  },
  {
    metadata_group: 'Structure',
    description: 'How the parts of this RO-Crate relate, such as collection and object relationships.'
  },
  {
    metadata_group: 'Provenance',
    description: 'Detailed description of how entities were created, by whom and with which tools.'
  },
  {
    metadata_group: 'Space & Time',
    description: 'Where and when the data was collected; the times and places it mentions or describes.'
  },
  {
    metadata_group: 'Software & Hardware',
    description: 'For computer programs and execution environments that could be used to create data, have created data, or are being packaged and described.'
  },
  {
    metadata_group: 'Others',
    description: '[TODO: needs description]'
  },
]
</script>
<template>
  <el-row :gutter="20" class="p-2">
    <el-col :span="6" :xs="0" :sm="0" :md="4" :lg="6" :xl="8">
      <div class="grid-content ep-bg-purple"/>
    </el-col>
    <el-col :span="18" :xs="24" :sm="24" :md="20" :lg="18" :xl="16">
      <div class="grid gap-6">
        <h2 class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">Toolbar Options</h2>
        <h4 class="text-gray-500 dark:text-gray-400">
          📂 Open Directory
        </h4>
        <p class="text-gray-500 dark:text-gray-400">
          Select a directory/folder to describe your research.
        </p>
        <h4 class="text-gray-500 dark:text-gray-400">
          🗃️ Load Files
        </h4>
        <p class="text-gray-500 dark:text-gray-400">
          Loads files from the selected directory into this RO-Crate.
        </p>
        <h4 class="text-gray-500 dark:text-gray-400">
          🗄️ Bulk Add
        </h4>
        <p class="text-gray-500 dark:text-gray-400">
          Select a spreadsheet from a different directory to assist you with metadata description.
          This will append to your existing RO-Crate if there is already one created.
        </p>
        <h4 class="text-gray-500 dark:text-gray-400">
          💾 Save
        </h4>
        <p class="text-gray-500 dark:text-gray-400">
          Save the state of this page into your RO-Crate.
          This will create an <i>ro-crate-metadata.json</i> file or append data into an existing <i>ro-crate-metadata.json</i>.
        </p>
        <h4 class="text-gray-500 dark:text-gray-400">
          ⓧ Close
        </h4>
        <p class="text-gray-500 dark:text-gray-400">
          Closes without saving.
        </p>
        <h4 class="text-gray-500 dark:text-gray-400">
          Profile
        </h4>
        <p class="text-gray-500 dark:text-gray-400">
          Select a predefined profile or load one from your computer.
        </p>
      </div>
    </el-col>
  </el-row>

  <el-row :gutter="20" class="p-2">
    <el-col :span="6" :xs="0" :sm="0" :md="4" :lg="6" :xl="8">
      <div class="grid-content ep-bg-purple"/>
    </el-col>
    <el-col :span="18" :xs="24" :sm="24" :md="20" :lg="18" :xl="16">
      <h2 class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">General Navigation</h2>
      <ul>
        <li> - <strong>Selected Directory</strong> shows the directory or folder you currently have open.</li>
        <li> - Below <strong>Selected Directory</strong>, you will see a home icon followed by a file path that indicates where you are located in the collection levels. This will change as you navigate to different sublevels.</li>
        <li> - Depending on the metadata group, different types of metadata will be available:</li>
      </ul>
      <br>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="metadata_group" label="Metadata Group" width="200" />
        <el-table-column prop="description" label="Description" />
      </el-table>
      <br>
      <p>There are several compulsory metadata fields required for each collection. To view these, go to [TODO: add link].</p>
      <p>On the right-hand panel, there are some further options related to navigating and creating metadata entities:</p>
      <ul>
        <li><strong> - Create New Entity</strong>: [TODO: Needs description].</li>
        <li><strong> - Links from</strong>: When located in a sub-group, select to view the parent group(s).</li>
        <li><strong> - All Entities</strong>: Select to view all metadata associated with your collection.</li>
        <li><strong> - Unlinked Entities</strong>: Select to view all metadata that currently is not linked to any properties.</li>
      </ul>

    </el-col>
  </el-row>
</template>