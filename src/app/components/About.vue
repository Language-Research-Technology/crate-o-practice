<script setup>
import { ElRow, ElCol, ElTable, ElTableColumn } from 'element-plus';

const startTableData = [
  {
    file_option: 'Open Directory',
    description: 'Select a directory/folder to describe your research.'
  },
  {
    file_option: 'Load Files',
    description: 'Loads files from the selected directory into this RO-Crate.'
  },
  {
    file_option: 'Bulk Add',
    description: 'Select a spreadsheet from a different directory to assist you with metadata description. This will append to your existing RO-Crate if there is already one created.'
  },
  {
    file_option: 'Save',
    description: 'Save the state of this page into your RO-Crate. This will create an ro-crate-metadata.json file or append data into an existing ro-crate-metadata.json.'
  },
  {
    file_option: 'Close',
    description: 'Closes without saving.'
  },
  {
    file_option: 'Mode',
    description: 'Select a predefined mode or load one from your computer.'
  },
]

const entityTableData = [
  {
    entity: 'Class',
    definition: '(rdfs: Class) Used to classify resources. An instance of an rdfs: Class is defined using the predicate rdf: type. Classes in Language Data Commons include CollectionEvent, CollectionProtocol, DataDepositLicense, DataLicense and DataReuseLicense.'
  },
  {
    entity: 'Property',
    definition: '(rdfs: Property) are used to add attributes to classes. Similar to how we define classes, we can define instances of properties to add attributes to statements.'
  },
  {
    entity: 'DefinedTerm',
    definition: "A 'word, name, acronym, phrase, etc. with a formal definition' and they are 'often used in the context of category or subject classification.' DefinedTerms allow us a) to have accurate definitions of the values we want to give to properties and b) to group such definitions in DefinedTermSets which can function as controlled vocabularies."
  },
]
</script>
<template>
  <el-row :gutter="20" class="p-2">
    <el-col :span="6" :xs="0" :sm="0" :md="4" :lg="6" :xl="8">
      <div class="grid-content ep-bg-purple"/>
    </el-col>
    <el-col :span="18" :xs="24" :sm="24" :md="20" :lg="18" :xl="16">
      <h2 class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">General Information</h2>
      <p>Crate-O is a browser-based editor for <a href="https://www.researchobject.org/ro-crate">Research Object Crates (RO-Crate)</a>. RO-Crate is a flexible, developer-friendly approach to linked-data description and packaging. </p>
      <br>
      <p>Crate-O is designed to:</p>
      <ul>
        <li> - describe files on a user’s computer and to add contextual information about those files,</li>
        <li> - skip the files and describe abstract contextual entities such as in a Cultural Collection or an encyclopaedia, or</li>
        <li> - annotate existing resources elsewhere on the web.</li>
      </ul>
      <br>
      <p>Crate-O works only with <a href="https://google.com/chrome">Google Chrome</a> and <a href="https://microsoft.com/edge">Microsoft Edge</a> at this stage as it describes files on the user&#39;s computer, and saves RO-Crate metadata there. We will be releasing versions that work with online resources directly which will be compatible with other browsers (see the <a href="https://github.com/Language-Research-Technology/crate-o#roadmap--backlog">Roadmap</a>).</p>
      <br>
      <p>While the current version of Crate-O is designed for editing self-contained RO-Crates (and works fine with crates containing tens of thousands of entities), our roadmap includes editing fragments of larger linked-data resources, and integration with Arkisto repositories such as the Oni repository, data API and search portal.</p>
      <br>
      <p>Crate-O is currently developed by the <a href="https://www.ldaca.edu.au/">Language Data Commons of Australia (LDaCA)</a>, under the guidance of Peter Sefton as technical lead. If the tool is adopted in other contexts (we are in talks with a few groups about this) then we aim to establish a steering committee/reference group to help guide development.</p>
      <p><br></p>
      <h2 class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">Crate-O Use Cases</h2>
      <p>Crate-O can be used to:</p>
      <ul>
        <li> - Describe data collections</li>
        <li> - Add and edit the metadata fields of a data collection</li>
        <li> - Submit a collection to the LDaCA Portal</li>
        <li> - Edit a schema</li>
      </ul>
      <p><br></p>
      <h2 class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">Main Start Page Options</h2>
      <p>From the main toolbar, the following options are available:</p>
      <el-table :data="startTableData" border style="width: 100%">
        <el-table-column prop="file_option" label="File Option" width="200" />
        <el-table-column prop="description" label="Description" />
      </el-table>
      <br>
      <p><br></p>
      <h2 class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">RO-Crate Collection Hierarchy</h2>
      <p>The diagram below shows the hierarchical relationship between collections, objects and files in a corpus, together with the metadata that these relationships are organised by.</p>
      <p><img src="..\assets\my_corpus.png" alt="Self-contained corpus crate with all resources"></p>
      <p>The metadata is organised by the various kinds of entities recognised in the ontology documented at schema.org at least partly based on the RDF framework.</p>
      <br>
      <el-table :data="entityTableData" border style="width: 100%">
        <el-table-column prop="entity" label="Entity" width="200" />
        <el-table-column prop="definition" label="Definition" />
      </el-table>
      <br>
      <p>For more details on these entities and their related metadata, see <a href="https://ldaca.gitbook.io/metadata-for-language-data/">Metadata for Language Data</a>.</p>
    </el-col>
  </el-row>

</template>